import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlobe = (
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
        <ellipse cx={12} cy={12} stroke='currentColor' strokeWidth={1.5} rx={4} ry={10} />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M21.996 11.72c-1.802 1.482-5.601 2.502-9.996 2.502-4.395 0-8.194-1.02-9.996-2.502m19.992 0C21.848 6.327 17.43 2 12 2c-5.43 0-9.848 4.327-9.996 9.72m19.992 0c.003.093.004.186.004.28 0 5.523-4.477 10-10 10S2 17.523 2 12c0-.094.001-.187.004-.28'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobe);
export default ForwardRef;
