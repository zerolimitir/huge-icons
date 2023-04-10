import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapBig = (
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
            d='M15.442 15.903C17.302 13.997 19 11.142 19 8.857 19 5.07 15.866 2 12 2S5 5.07 5 8.857c0 2.285 1.698 5.14 3.558 7.046C9.78 17.157 11.074 18 12 18c.926 0 2.22-.843 3.442-2.097ZM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.055 16.493C4.612 17.029 3 17.952 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.048-1.612-1.97-4.055-2.507-.142.157-.285.31-.429.457-.672.69-1.395 1.299-2.115 1.746-.687.426-1.528.804-2.401.804-.873 0-1.714-.378-2.4-.804-.721-.448-1.444-1.057-2.116-1.746-.144-.147-.287-.3-.429-.457Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapBig);
export default ForwardRef;
