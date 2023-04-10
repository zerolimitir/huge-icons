import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHospital = (
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
        <path fill='currentColor' d='M4 6v16h16V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4Z' opacity={0.4} />
        <path fill='currentColor' d='M9 17v5h6v-5a3 3 0 1 0-6 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 4.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V11a.75.75 0 0 1-1.5 0V8.75H9a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 .75-.75ZM2.25 22a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHospital);
export default ForwardRef;
