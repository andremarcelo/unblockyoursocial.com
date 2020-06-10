<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Facades\Validator;
class AuthController extends Controller
{
    /**
     * Login API
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            if($user->is_confirmed) {
                $success['token'] =  $user->createToken('LaraPassport')->accessToken;
                $success['firstname'] = $user->firstname;
                $success['lastname'] = $user->lastname;
                $success['email'] = $user->email;
                $success['role'] = $user->role;
                $success['package'] = $user->package;
                $success['description'] = $user->description;
                $success['is_confirmed'] = $user->is_confirmed;
                return response()->json([
                    'status' => 'success',
                    'data' => $success
                ]);
            }
            return response()->json([
                'status' => 'error',
                'data' => 'Verify your email. Thank you.',
                'is_confirmed' => $user->is_confirmed
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => 'Unauthorized Access'
            ]);
        }
    }

    public function user(Request $request)
    {
        $user= $request->user();
        dd($user); die;
    }

    /**
     * Register API
     * PACKAGE : NOT_SELECT|PACKAGE_1|PACKAGE_2|PACKAGE_3
     * ROLE : ADMIN|USER
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            //'package' => 'required',
            //'role' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()]);

        }
        try {
            $postArray = $request->all();
            $postArray['password'] = bcrypt($postArray['password']);
            $postArray['package'] =  empty($postArray['package']) ? 'NOT_SELECT' : $postArray['package'] ;
            $postArray['role'] =  empty($postArray['role']) ? 'USER' : 'ADMIN';
            $user = User::create($postArray);
            $success['token'] =  $user->createToken('LaraPassport')->accessToken;
            $success['name'] =  $user->name;
            $success['firstname'] =  $user->firstname;
            $success['lastname'] =  $user->lastname;
            $success['is_confirmed'] = $user->is_confirmed;
            $success['package'] =  empty($user->package) ? 'NOT_SELECT' : $user->package ;
            $success['role'] =  empty($user->role) ? 'USER' : 'ADMIN';
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json([
                'status' => 'email-exists',
                'data' => "The email  is register",
            ]);
        }

        return response()->json([
            'status' => 'success',
            'data' => $success,
        ]);
    }
}
