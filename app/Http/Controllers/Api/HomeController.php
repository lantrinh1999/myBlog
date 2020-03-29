<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index()
    {
        $banner = [
            'image' => '/banner.png',
            'title' => "Hii, I'm linh",
            'description' => "I am 30 years old and I'm a web developer, abcxyz and etc...",
        ];
        $about = [
            'title' => 'My name is Trần Đức Linh.',
            'description' => "I'm a 1234567890",
            'contents' => '
                    <p>
                        Website đi ăn cắp giao diện, cơ bản thì back-end
                        laravel, frontend vuejs, chưa có phần quản trị web
                        cũng như dữ liệu đều tĩnh hết. Lười làm quá. Mấy hôm
                        nữa rảnh thì chăm chút tí... :)))
                    </p>
                    <p>
                        TấT cả code được public lại đây:
                        <a target="_bank" href="https://github.com/lantrinh1999/myBlog">GITHUB</a>
                    </p>',
        ];
        $contact = [
            'title' => 'Contact Me',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            'contact' => array(
                'title' => 'get in touch',
                'description' => 'Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam,',
                'information' => [
                    0 => [
                        'icon' => '<i class="icon theme-bg ti-email"></i>',
                        'content' => '<p>linhtd.contact@gmail.com<br>linhtd.contact@gmail.com</p>',
                    ],
                    1 => [
                        'icon' => '<i class="icon theme-bg ti-direction"></i>',
                        'content' => '<p>301 The Greenhouse,<br>London, E2 8DY.</p>',
                    ],
                    2 => [
                        'icon' => '<i class="icon theme-bg ti-mobile"></i>',
                        'content' => '<p>+1 800-222-000,<br>+44 800-222-000</p>',
                    ],
                ],
            ),
        ];

        return response()->json(compact('banner', 'about', 'contact'), 200);
    }
}
