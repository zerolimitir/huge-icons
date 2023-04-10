import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGooglePlus = (
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
            d='M2.75 12a5.75 5.75 0 0 1 9.816-4.066.75.75 0 1 0 1.06-1.06A7.25 7.25 0 1 0 15.75 12a.75.75 0 0 0-.749-.751H8.5a.75.75 0 0 0 0 1.5h5.701A5.751 5.751 0 0 1 2.75 12Zm18-2a.75.75 0 0 0-1.5 0v1.25H18a.75.75 0 0 0 0 1.5h1.25V14a.75.75 0 0 0 1.5 0v-1.25H22a.75.75 0 0 0 0-1.5h-1.25V10Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGooglePlus);
export default ForwardRef;
