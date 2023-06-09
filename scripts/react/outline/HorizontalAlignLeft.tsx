import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHorizontalAlignLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.811 1.278a.883.883 0 0 0-.481.374c-.066.121-.071.7-.08 10.263-.008 7.295.002 10.18.034 10.298.15.559.912.717 1.29.267.155-.185.186-.359.186-1.069v-.649l3.85-.012c3.567-.012 3.868-.018 4.09-.085.979-.293 1.693-1.013 1.967-1.985.064-.23.073-.425.073-1.68s-.009-1.45-.073-1.68a2.792 2.792 0 0 0-1.465-1.782c-.579-.286-.358-.272-4.612-.288l-3.83-.013v-2.476l6.85-.011c6.476-.011 6.863-.016 7.09-.084.982-.296 1.693-1.015 1.967-1.986.064-.23.073-.425.073-1.68s-.009-1.45-.073-1.68a2.792 2.792 0 0 0-1.465-1.782c-.6-.296-.007-.274-7.609-.288l-6.827-.012-.013-.729c-.012-.648-.022-.744-.095-.868a.807.807 0 0 0-.847-.363m14.726 3.599c.251.123.463.335.586.586.097.197.097.2.097 1.537v1.34l-.098.199a1.306 1.306 0 0 1-.665.619c-.219.082-.251.082-6.959.082H4.76V4.759l6.79.011 6.79.01.197.097m-6 10c.251.123.463.335.586.586.097.197.097.2.097 1.537v1.34l-.098.199a1.306 1.306 0 0 1-.665.619c-.216.081-.281.082-3.959.082H4.76v-4.481l3.79.01 3.79.011.197.097'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignLeft);
export default ForwardRef;
