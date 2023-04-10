import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPlayAdd = (
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
            d='M2.75 12a9.25 9.25 0 1 1 18.27 2.056.75.75 0 1 0 1.464.332A10.78 10.78 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75c.82 0 1.62-.092 2.388-.266a.75.75 0 1 0-.332-1.463A9.25 9.25 0 0 1 2.75 12Zm11.567-1.342L11.17 9.085A1.5 1.5 0 0 0 9 10.427v3.146a1.5 1.5 0 0 0 2.17 1.342l3.147-1.573c1.105-.553 1.105-2.13 0-2.684ZM19 15.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V16a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlayAdd);
export default ForwardRef;
