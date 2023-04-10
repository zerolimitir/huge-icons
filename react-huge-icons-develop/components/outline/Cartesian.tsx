import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCartesian = (
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
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M22 11v2M2 11v2' />
        <path
            fill='currentColor'
            d='M12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 20a.75.75 0 0 0 1.5 0h-1.5ZM22 12.75a.75.75 0 0 0 0-1.5v1.5Zm-20-1.5a.75.75 0 0 0 0 1.5v-1.5Zm9 10a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2-21.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 4a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 7.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5ZM17.25 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm-7.5-2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5ZM6.53 1.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm2 1.06a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM6.25 4a.75.75 0 0 0 1.5 0h-1.5Zm14.28 11.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2 1.06a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-3.06.94a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm2 1.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM11.25 2v20h1.5V2h-1.5ZM22 11.25H2v1.5h20v-1.5Zm-11 11.5h2v-1.5h-2v1.5Zm0-20h2v-1.5h-2v1.5Zm0 5.5h2v-1.5h-2v1.5Zm0 9h2v-1.5h-2v1.5ZM15.75 11v2h1.5v-2h-1.5Zm-9 0v2h1.5v-2h-1.5ZM5.47 2.53l1 1 1.06-1.06-1-1-1.06 1.06Zm2.06 1 1-1-1.06-1.06-1 1 1.06 1.06ZM6.25 3v1h1.5V3h-1.5Zm13.22 13.53 1 1 1.06-1.06-1-1-1.06 1.06Zm2.06 1 1-1-1.06-1.06-1 1 1.06 1.06Zm-1.06-1.06-1 1 1.06 1.06 1-1-1.06-1.06Zm0 1.06 1 1 1.06-1.06-1-1-1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartesian);
export default ForwardRef;
