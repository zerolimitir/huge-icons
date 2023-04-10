import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHeadphonesSilent = (
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
        <g fill='currentColor' fillRule='evenodd' clipRule='evenodd' opacity={0.4}>
            <path d='M12 3.75A8.25 8.25 0 0 0 3.75 12v4.75h-1.5V12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v4.75h-1.5V12A8.25 8.25 0 0 0 12 3.75Z' />
            <path d='M14.25 16a3.75 3.75 0 1 1 7.5 0v2a3.75 3.75 0 1 1-7.5 0v-2Z' />
        </g>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.25 16a3.75 3.75 0 1 1 7.5 0v2a3.75 3.75 0 1 1-7.5 0v-2ZM1.47 1.47a.75.75 0 0 0 0 1.06l20 20a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 0Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M18 21.75A3.75 3.75 0 0 1 14.25 18v-2c0-.217.018-.43.054-.636l5.764 5.765a3.732 3.732 0 0 1-2.068.62Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphonesSilent);
export default ForwardRef;
