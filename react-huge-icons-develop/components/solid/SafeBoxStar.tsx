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
            fillRule='evenodd'
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm6.75 4a.75.75 0 0 0-1.5 0v1.309a4.74 4.74 0 0 0-2.69 1.416L7.045 7.85a.75.75 0 1 0-.75 1.3l1.412.815A4.732 4.732 0 0 0 7.25 12c0 .728.164 1.418.457 2.035l-1.412.816a.75.75 0 1 0 .75 1.298l1.515-.874a4.74 4.74 0 0 0 2.69 1.416V18a.75.75 0 0 0 1.5 0v-1.309a4.74 4.74 0 0 0 2.69-1.416l1.515.874a.75.75 0 1 0 .75-1.299l-1.412-.815A4.73 4.73 0 0 0 16.75 12c0-.728-.164-1.418-.457-2.035l1.412-.815a.75.75 0 0 0-.75-1.3l-1.514.875a4.74 4.74 0 0 0-2.69-1.416V6Zm-4 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSafeBoxStar);
export default ForwardRef;
