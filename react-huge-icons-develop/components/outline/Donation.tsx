import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDonation = (
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
        <rect width={9} height={9} x={13} y={3} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18.5 6h-2M2 9h2l6.262 2.74a1.911 1.911 0 0 1 .99 2.503v0a1.911 1.911 0 0 1-2.509 1.004L7 14.5'
        />
        <path
            fill='currentColor'
            d='M2.335 17.33a.75.75 0 1 0-.67 1.34l.67-1.34Zm9-3-.67-.336-.671 1.341.67.336.671-1.342Zm2.398 2.037-.335.67.335-.67Zm2.683 1.383H18v-1.5h-1.584v1.5ZM18 20.25H9.889v1.5H18v-1.5Zm-11.354-.765-4.31-2.156-.671 1.342 4.31 2.155.671-1.341Zm7.423-3.79-2.734-1.366-.67 1.342 2.733 1.366.67-1.341Zm-4.18 4.555a7.25 7.25 0 0 1-3.243-.765l-.67 1.341a8.75 8.75 0 0 0 3.913.924v-1.5ZM19.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 19h-1.5ZM18 17.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 16.25v1.5Zm-1.584-1.5a5.25 5.25 0 0 1-2.348-.554l-.67 1.341a6.75 6.75 0 0 0 3.018.713v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDonation);
export default ForwardRef;
