<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\usersx;
class conversation extends Model
{
    use HasFactory;
    protected $fillable=[
        'from_id',
        'to_id'
    ];
    
    public function getEvents(){
        return $this->belongsTo(usersx::class,'from_id');
      }
}
