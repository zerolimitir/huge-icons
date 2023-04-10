import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailSilent = (
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
            d='M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.47 1.47a.75.75 0 0 1 1.06 0l8.928 8.927a3.25 3.25 0 0 0 2.345-.5l3.781-2.521a.75.75 0 1 1 .832 1.248l-3.781 2.52a4.742 4.742 0 0 1-1.72.71l9.615 9.616a.75.75 0 1 1-1.06 1.06l-1.865-1.865A3.987 3.987 0 0 1 18 21H6a4 4 0 0 1-4-4V7c0-1.09.435-2.077 1.141-2.798L1.47 2.53a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailSilent);
export default ForwardRef;
