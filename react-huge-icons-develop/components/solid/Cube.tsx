import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCube = (
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
            d='m13.625 1.472 5 2.222c.407.181.773.425 1.09.717L12 7.926 4.286 4.41a3.995 3.995 0 0 1 1.09-.717l5-2.222a4 4 0 0 1 3.249 0ZM3.38 5.647A3.995 3.995 0 0 0 3 7.35v6.801a4 4 0 0 0 2.375 3.656l5 2.222c.283.126.576.217.875.274V9.232L3.38 5.647Zm9.37 14.655a3.98 3.98 0 0 0 .875-.274l5-2.222A4 4 0 0 0 21 14.15v-6.8c0-.601-.134-1.18-.38-1.703l-7.87 3.585v11.07Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCube);
export default ForwardRef;
