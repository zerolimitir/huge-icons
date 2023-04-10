import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGpsOff = (
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
            d='M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 18a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM22.75 12a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-18 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 20A8 8 0 0 1 6.898 5.837l11.264 11.265A7.983 7.983 0 0 1 12 20Zm0-5a3 3 0 0 1-1.524-5.584l4.109 4.108A2.998 2.998 0 0 1 12 15Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M15 12a3 3 0 0 0-4.524-2.585l4.109 4.109c.264-.447.415-.968.415-1.524Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGpsOff);
export default ForwardRef;
