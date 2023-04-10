import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAnnouncement = (
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
            d='M20.015 2.74a.75.75 0 0 1 .53.918l-.366 1.366a.75.75 0 0 1-1.449-.388l.366-1.366a.75.75 0 0 1 .919-.53Zm-4.147 1.696a2 2 0 0 0-3.197-.362l-6.448 6.94c.225.205.422.447.582.724l2.5 4.33a3 3 0 0 1 .335.866l9.235-2.115a2 2 0 0 0 1.286-2.95l-4.293-7.433Zm-8.02 12.291-2.5-4.33a1.5 1.5 0 0 0-2.598 1.5l2.5 4.33a1.5 1.5 0 1 0 2.598-1.5Zm5.861 4.42-1.903-3.297 3.06-.7 1.441 2.497a1.5 1.5 0 1 1-2.598 1.5ZM21.65 7.57a.75.75 0 1 0-.389 1.449l1.366.366a.75.75 0 0 0 .389-1.45l-1.367-.365Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAnnouncement);
export default ForwardRef;
