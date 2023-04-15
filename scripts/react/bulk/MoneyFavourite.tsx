import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 7.095A.976.976 0 0 0 5.002 8c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m5.858 2.98a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m5.725 5.326c-.715.257-1.159.986-1.041 1.709.077.474.191.628 1.246 1.674 1.119 1.111 1.131 1.118 1.681 1.088.238-.013.381-.044.511-.11.196-.099 1.843-1.701 2.041-1.985a1.618 1.618 0 0 0 .128-1.585 1.527 1.527 0 0 0-1.292-.862c-.499-.032-.855.104-1.264.481l-.176.162-.149-.14c-.257-.244-.438-.358-.69-.437-.317-.098-.713-.097-.995.005'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyFavourite);
export default ForwardRef;
