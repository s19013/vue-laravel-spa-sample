<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use DB;

class TaskController extends Controller
{
    public function index(){return Task::all();}

    public function show(Task $task){return $task;}
    // これだけで良いみたい 勝手にjsonに変換してくれるらしい

    public function store(Request $request){
        DB::transaction(function() use($request){
            Task::create($request->all());
        });
    }


}
