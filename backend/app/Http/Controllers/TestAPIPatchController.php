<?php

namespace App\Http\Controllers;


use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class TestAPIPatchController extends BaseController
{
    public function __invoke(Request $request){
        return $request->validate([
            'data' => 'string'
        ]);
    }
}
