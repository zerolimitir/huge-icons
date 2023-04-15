import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.973 2.059a4.27 4.27 0 0 0-1.693.722c-.331.243-2.242 2.155-2.497 2.499a4.33 4.33 0 0 0-.697 1.55L2.049 7h19.904l-.054-.23a4.293 4.293 0 0 0-.711-1.53c-.288-.385-2.26-2.326-2.568-2.527-.543-.356-1.024-.551-1.615-.654-.466-.082-9.581-.081-10.032 0m4.137 8.02c-1.016.215-1.71.862-1.997 1.863-.078.272-.091.41-.091.958.001.585.01.671.112 1 .293.951 1.148 2.3 2.092 3.3.299.318.413.39.664.425.317.043.498-.039.832-.378.648-.657 1.441-1.767 1.819-2.547.318-.654.426-1.054.448-1.66.058-1.593-.713-2.673-2.118-2.962a5.105 5.105 0 0 0-1.761.001m1.326 2.039a.988.988 0 0 1 .259 1.577.988.988 0 0 1-1.39 0 .987.987 0 0 1 0-1.389.986.986 0 0 1 1.131-.188'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingLocation);
export default ForwardRef;
