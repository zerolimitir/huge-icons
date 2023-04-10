import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReturnBox = (
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
            d='M7.999 2.75a.75.75 0 0 0-.588 1.216l1.586 2a.75.75 0 1 0 1.175-.932l-.621-.784h4.948a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 0 0 1.5h1.5a2.25 2.25 0 0 0 0-4.5h-6.5Zm-5.785 8.613 1.549-1.995a1 1 0 0 1 .79-.386h7.444l-2.698 3.594a1 1 0 0 1-.8.4H3.004a1 1 0 0 1-.79-1.613Zm9.783-2.381h7.447a1 1 0 0 1 .79.386l1.55 1.994a1 1 0 0 1-.79 1.614h-5.411a1 1 0 0 1-.79-.387l-2.796-3.607Zm-7.998 5.414h4.124a3.518 3.518 0 0 0 2.917-1.535l.966-1.428.966 1.428a3.518 3.518 0 0 0 2.916 1.535H20v5.411c0 1.625-1.343 2.943-3 2.943H7c-1.657 0-3-1.318-3-2.943v-5.411Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReturnBox);
export default ForwardRef;
