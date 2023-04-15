import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 3.047c-.721.138-1.381.801-1.536 1.545C4.018 4.72 4 5.287 4 6.022V7.24h16V6.022c0-.735-.018-1.302-.044-1.43-.159-.762-.818-1.411-1.573-1.549-.306-.056-12.508-.052-12.803.004M4.002 14.01c.002 4.829.008 5.271.071 5.513.31 1.186 1.725 1.829 2.809 1.276.088-.045.983-.699 1.989-1.452 2.188-1.64 2.152-1.615 2.485-1.732.551-.195 1.269-.101 1.748.227.108.074 1.019.751 2.025 1.505 1.006.753 1.901 1.407 1.989 1.452 1.084.553 2.499-.09 2.809-1.276.063-.242.069-.684.071-5.513L20 8.76H4l.002 5.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookmark);
export default ForwardRef;
