import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapLocationTop = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M21.56 9.106c.276-.734.44-1.46.44-2.106a5 5 0 0 0-10 0c0 .212.018.432.051.659C12.454 10.387 15.153 14 17 14c1.532 0 3.652-2.488 4.56-4.894ZM17 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M10.513 6.59a6.014 6.014 0 0 0 .054 1.287c.25 1.689 1.166 3.508 2.228 4.89.539.7 1.16 1.348 1.821 1.835.633.465 1.462.898 2.384.898.774 0 1.475-.306 2.033-.659.574-.362 1.112-.848 1.593-1.38A12.18 12.18 0 0 0 22 11.601v5.34c0 1.17-.507 2.29-1.468 2.957-1.227.852-3.013 1.907-4.532 2.077-1.66.186-2.83-.704-4-1.595-1.17-.89-2.34-1.78-4-1.595-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872v-8.748c0-1.17.507-2.29 1.468-2.958C4.695 7.251 6.481 6.195 8 6.025c.973-.11 1.777.152 2.513.566Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationTop);
export default ForwardRef;
