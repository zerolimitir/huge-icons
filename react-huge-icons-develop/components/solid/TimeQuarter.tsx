import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeQuarter = (
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
            d='M2.754 12.26a9.25 9.25 0 1 1 8.986 8.986.75.75 0 0 0-.042 1.5c.1.003.201.004.302.004 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12c0 .101.001.202.004.302a.75.75 0 1 0 1.5-.041Zm-.367 2.607a.75.75 0 0 1 .969.433c.062.162.128.321.198.479a.75.75 0 0 1-1.368.613 10.71 10.71 0 0 1-.232-.557.75.75 0 0 1 .433-.968Zm1.831 3.458a.75.75 0 0 1 1.06.03c.12.125.242.248.367.367a.75.75 0 0 1-1.03 1.09c-.146-.139-.288-.28-.427-.427a.75.75 0 0 1 .03-1.06Zm3.012 2.498a.75.75 0 0 1 .991-.377 9.1 9.1 0 0 0 .48.198.75.75 0 0 1-.536 1.402c-.188-.072-.374-.15-.557-.232a.75.75 0 0 1-.378-.99ZM14 12a2 2 0 0 1-1.25 1.855V16a.75.75 0 0 1-1.5 0v-2.145a2.007 2.007 0 0 1-1.105-1.105H6a.75.75 0 0 1 0-1.5h4.145A2 2 0 0 1 14 12Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeQuarter);
export default ForwardRef;
