<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\usersx;
use App\Models\conversation;
use App\Models\message;
use Illuminate\Support\Facades\Hash;

class UsersxController extends Controller
{
    //


    public function logins(Request $request)
    {

        $row = usersx::firstWhere('username', $request->username);

        if ($row) {


            if ($row->password == $request->password) {

                return $row;
                $err = ['messs' => 'worng'];
                return json_encode($err);
            } else {

                $err = ['messs' => 'worng'];
                return json_encode($err);
            }
        }
    }


    public function register(Request $request)
    {

        // $request->validate([
        //     'username' => 'required|min:3|max:16',
        //     'name' => 'required|min:1|max:16',
        //     'password' => 'required|min:3|max:30|'
        // ]);


        $query = usersx::insert([

            'name' => $request->name,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        if ($query) {
            return 'good';
        } else {
            return 'not good';
        }
    }


    public function updatename(Request $request)
    {

        $query = usersx::where('id', $request->cid)
            ->update(
                [
                    'name' => $request->name,
                    'username' => $request->username,
                    'password' => $request->password,
                ]
            );

        if ($query) {
            return 'good';
        } else {
            return 'not';
        }
    }










    public function login(Request $request)
    {




        return usersx::get();
    }

    public function conv(Request $request)
    {
        $id = $request->id;
        $id = 1;
        // return conversation::where('from_id', $id)->get();
        // return conversation::with('getEvents')->where('from_id', $id)->get();
        // return  conversation::leftjoin('usersx', 'conversations.from_id', '=', 'usersx.id')->where('conversations.from_id', $id)
        //     ->get(['users.name', 'conversations.*']);

        return conversation::leftJoin('usersxes', 'usersxes.id', '=', 'conversations.to_id')
            ->select('conversations.*', 'usersxes.name')->where('from_id', $id)
            ->get();
    }


    public function singleconv(Request $request)
    {
        $id = $request->from_id;
        $to_id = $request->to_id;

        return message::where('from_id', $id)->where('to_id', $to_id)->orWhere('from_id', $to_id)->Where('to_id', $id)->get();
    }


    
    public function send(Request $request)
    {
        $from_id = $request->from_id;
        $to_id = $request->to_id;
        $role = $request->role;
        $message = $request->message;

        $query = message::insert(
            [
                'from_id'     => $from_id,
                'to_id'   =>  $to_id,
                'role'     =>   $role,
                'message'     =>   $message,
            ]
        );

        if ($query) {

            return json_encode('ok');
        } else {
            return json_encode('not ok');
        }
    }
}
