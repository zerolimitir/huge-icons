import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlassBroken = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 25'
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
            d='M12.75 13.627h.017c4.342 0 7.247-4.47 5.483-8.437l-1.32-2.97a1 1 0 0 0-.913-.593H7.983a1 1 0 0 0-.914.594L5.75 5.19c-1.763 3.968 1.142 8.437 5.484 8.437h.017v7.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-7.25Zm.085-9.671a.75.75 0 0 1 .336 1.006l-.957 1.915H13a.75.75 0 0 1 .67 1.085l-1.5 3a.75.75 0 1 1-1.34-.67l.957-1.915H11a.75.75 0 0 1-.67-1.086l1.5-3a.75.75 0 0 1 1.005-.335Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlassBroken);
export default ForwardRef;
