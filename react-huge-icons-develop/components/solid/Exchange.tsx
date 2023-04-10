import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgExchange = (
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
            d='M17.53 3.47a.75.75 0 0 0-1.06 1.06l1.72 1.72H9A5.75 5.75 0 0 0 3.25 12v1a.75.75 0 0 0 1.5 0v-1A4.25 4.25 0 0 1 9 7.75h11a.75.75 0 0 0 .53-1.28l-3-3ZM6.47 20.53a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15A5.75 5.75 0 0 0 20.75 12v-1a.75.75 0 0 0-1.5 0v1A4.25 4.25 0 0 1 15 16.25H4a.75.75 0 0 0-.53 1.28l3 3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgExchange);
export default ForwardRef;
