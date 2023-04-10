import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSafeBoxStar = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 5.25a.75.75 0 0 1 .75.75v1.309a4.74 4.74 0 0 1 2.69 1.416l1.515-.875a.75.75 0 1 1 .75 1.3l-1.412.815c.293.617.457 1.307.457 2.035a4.73 4.73 0 0 1-.457 2.035l1.412.815a.75.75 0 0 1-.75 1.3l-1.514-.875a4.74 4.74 0 0 1-2.691 1.416V18a.75.75 0 0 1-1.5 0v-1.309a4.74 4.74 0 0 1-2.69-1.416l-1.515.874a.75.75 0 0 1-.75-1.299l1.412-.815A4.731 4.731 0 0 1 7.25 12c0-.728.164-1.418.457-2.035l-1.412-.816a.75.75 0 0 1 .75-1.299l1.515.875a4.74 4.74 0 0 1 2.69-1.416V6a.75.75 0 0 1 .75-.75Zm0 3.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSafeBoxStar);
export default ForwardRef;
