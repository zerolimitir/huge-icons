import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionLeftDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.82 6.276a.986.986 0 0 0-.215.087c-.14.083-4.252 5.231-4.311 5.397a.624.624 0 0 0 0 .48c.074.209 4.193 5.341 4.355 5.426.172.092.53.092.702.001a.897.897 0 0 0 .388-.544c.055-.324.035-.354-1.919-2.797L7.96 12l1.86-2.326c1.382-1.728 1.871-2.367 1.903-2.486.143-.529-.368-1.045-.903-.912m6 0a.986.986 0 0 0-.215.087c-.14.083-4.252 5.231-4.311 5.397a.624.624 0 0 0 0 .48c.074.209 4.193 5.341 4.355 5.426.172.092.53.092.702.001a.897.897 0 0 0 .388-.544c.055-.324.035-.354-1.919-2.797L13.96 12l1.86-2.326c1.382-1.728 1.871-2.367 1.903-2.486.143-.529-.368-1.045-.903-.912'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionLeftDouble);
export default ForwardRef;
