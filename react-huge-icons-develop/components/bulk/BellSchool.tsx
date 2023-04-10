import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellSchool = (
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
        <circle r={8.5} fill='currentColor' opacity={0.4} transform='matrix(1 0 0 -1 10.5 10.5)' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.75 18.967V22c0 .414.336.75.75.75 6.697 0 12.139-5.374 12.248-12.045a2.5 2.5 0 1 0-1.766 2.188c-1.034 4.55-4.953 8.002-9.732 8.331v-2.257a8.5 8.5 0 0 1-1.5 0Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M12.5 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgBellSchool);
export default ForwardRef;
