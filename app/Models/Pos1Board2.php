<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pos1Board2 extends Model
{
    use HasFactory;

    protected $table = 'pos1_board2';

    public $timestamps = false;

    protected $fillable = [
        'soal',
        'jawaban',
    ];
}
