import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoon = (
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
            d='M13.282 5.656a8.535 8.535 0 0 1 2.958 2.888 6.485 6.485 0 0 1 5.511 2.02 5 5 0 0 0-8.468-4.907ZM3.5 13a5.5 5.5 0 0 1 10.56-2.161 1.5 1.5 0 0 0 1.847.835A3.476 3.476 0 0 1 17 11.5c1.144 0 2.16.547 2.801 1.4A3.5 3.5 0 0 1 17 18.5H9A5.5 5.5 0 0 1 3.5 13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoon);
export default ForwardRef;
