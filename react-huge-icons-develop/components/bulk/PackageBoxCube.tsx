import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageBoxCube = (
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
            d='m18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222A4 4 0 0 0 3 8.6v6.8a4 4 0 0 0 2.375 3.656l5 2.222a4 4 0 0 0 3.25 0l5-2.222A4 4 0 0 0 21 15.4V8.6a4 4 0 0 0-2.375-3.656Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222a3.995 3.995 0 0 0-1.61 1.304L12 10l8.236-3.752a3.996 3.996 0 0 0-1.611-1.304Z'
        />
        <path
            fill='currentColor'
            d='M12 7.25a.75.75 0 0 1 .75.75v13.552a4 4 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxCube);
export default ForwardRef;
