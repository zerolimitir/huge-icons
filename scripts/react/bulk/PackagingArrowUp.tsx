import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.973 2.059a4.27 4.27 0 0 0-1.693.722c-.331.243-2.242 2.155-2.497 2.499a4.33 4.33 0 0 0-.697 1.55L2.049 7h19.904l-.054-.23a4.293 4.293 0 0 0-.711-1.53c-.288-.385-2.26-2.326-2.568-2.527-.543-.356-1.024-.551-1.615-.654-.466-.082-9.581-.081-10.032 0m4.539 8.258a2.54 2.54 0 0 0-.42.185c-.214.125-1.611 1.482-1.739 1.69-.393.636.233 1.39.918 1.106.083-.034.33-.241.559-.469l.41-.408.001 2.36c.001 2.208.005 2.369.075 2.519a.743.743 0 0 0 1.368 0c.07-.15.074-.311.075-2.519l.001-2.36.41.408c.422.42.6.531.85.531.161 0 .4-.089.513-.192.244-.22.306-.648.135-.937-.131-.222-1.468-1.543-1.728-1.707-.429-.272-.977-.351-1.428-.207'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingArrowUp);
export default ForwardRef;
