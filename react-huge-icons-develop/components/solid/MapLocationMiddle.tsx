import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapLocationMiddle = (
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
            d='M16.194 17.949C16.686 16.94 17 15.893 17 15a5 5 0 0 0-10 0c0 2.761 3 7 5 7 1.353 0 3.164-1.94 4.194-4.051ZM12 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2.722 4.642C3.86 3.782 6.132 2.234 8 2.025c1.66-.186 2.83.704 4 1.595 1.17.89 2.34 1.78 4 1.595 1.411-.158 3.054-1.081 4.264-1.894.708-.476 1.736.02 1.736.873v9.669a1.86 1.86 0 0 1-.722 1.495c-.735.555-1.942 1.397-3.209 1.98.264-.768.431-1.568.431-2.338a6.5 6.5 0 1 0-13 0c0 .202.012.407.034.614-.646.326-1.264.706-1.798 1.065-.708.476-1.736-.02-1.736-.872v-9.67c0-.585.255-1.142.722-1.495Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationMiddle);
export default ForwardRef;
