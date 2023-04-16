import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPeople = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.66 1.278c-.884.107-1.633.623-2.092 1.442-.3.534-.388 1.374-.212 2.014.098.358.152.475.367.793l.154.227-.229.128c-1.181.661-2.039 1.869-2.314 3.258-.094.48-.108 2.997-.018 3.32.114.407.419.804.801 1.04.216.134.344.175.7.222.427.058.423.05.423.844v.674h-.65c-1.312.001-1.997.124-2.77.496a4.71 4.71 0 0 0-1.346.968c-.353.366-1.26 1.457-1.486 1.787a2.696 2.696 0 0 0-.327 2.339c.356 1.066 1.233 1.776 2.338 1.893.445.047 13.557.047 14.002 0 2.055-.217 3.163-2.55 2.011-4.232-.237-.346-1.144-1.434-1.506-1.805a4.735 4.735 0 0 0-1.363-.968c-.758-.358-1.441-.477-2.733-.478h-.65v-.674c0-.794-.004-.786.423-.844.356-.047.484-.088.7-.222.255-.158.463-.368.614-.62.232-.389.243-.479.242-2-.002-1.498-.029-1.762-.247-2.4-.37-1.084-1.17-2.055-2.14-2.598l-.229-.128.154-.227c.215-.318.269-.435.367-.793a3.063 3.063 0 0 0-.001-1.474c-.354-1.295-1.633-2.144-2.983-1.982m.794 1.563c.29.109.596.415.705.705A1.246 1.246 0 0 1 12 5.24c-.508 0-.986-.327-1.163-.795-.109-.288-.094-.741.033-.987.149-.289.479-.572.77-.661.198-.06.592-.039.814.044m.526 4.053c.528.174.874.392 1.304.822.428.427.644.769.825 1.304.108.319.108.324.122 1.694.017 1.561.028 1.505-.306 1.545-.67.081-1.106.343-1.424.855-.229.371-.232.394-.257 2.386-.027 2.097-.016 2.028-.383 2.389a1.226 1.226 0 0 1-1.722 0c-.367-.361-.356-.292-.383-2.389-.026-1.991-.029-2.016-.257-2.386-.318-.512-.754-.774-1.424-.855-.334-.04-.323.016-.306-1.545.014-1.37.014-1.375.122-1.694.181-.535.397-.877.825-1.304.717-.717 1.35-.966 2.384-.941.472.012.61.031.88.119M9.258 17.11c.081 1.045.57 1.822 1.462 2.322.714.4 1.846.4 2.56 0 .892-.5 1.381-1.277 1.462-2.322l.027-.35h.857c.928 0 1.27.045 1.71.223.381.155.783.429 1.091.744.467.476 1.338 1.553 1.449 1.792.263.564-.008 1.309-.583 1.602l-.193.099H4.9l-.18-.093a1.208 1.208 0 0 1-.562-.58c-.153-.32-.181-.566-.098-.854.084-.286.105-.317.801-1.153.687-.826.875-1.016 1.248-1.262.631-.415 1.045-.511 2.236-.515l.886-.003.027.35'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPeople);
export default ForwardRef;