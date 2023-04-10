import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAttachment = (
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
            d='M14.53 7.864a.75.75 0 0 0-1.06-1.061l1.06 1.06Zm-3.196-3.197-.53-.53.53.53ZM6 10l.53.53L6 10Zm13.864 3.197a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM13.47 6.803l-5.334 5.333 1.061 1.061 5.334-5.333-1.061-1.061Zm-1.606 9.06 5.333-5.333-1.06-1.06-5.334 5.333 1.06 1.06Zm-1.06-11.727L5.47 9.47l1.06 1.06 5.334-5.333-1.06-1.06ZM14.53 18.53l5.334-5.333-1.06-1.06-5.334 5.333 1.06 1.06Zm-9.06 0a6.407 6.407 0 0 0 9.06 0l-1.06-1.06a4.907 4.907 0 0 1-6.94 0l-1.06 1.06Zm0-9.06a6.407 6.407 0 0 0 0 9.06l1.06-1.06a4.907 4.907 0 0 1 0-6.94L5.47 9.47Zm11.727-5.334a4.521 4.521 0 0 0-6.394 0l1.06 1.061a3.021 3.021 0 0 1 4.274 0l1.06-1.06Zm0 6.394a4.521 4.521 0 0 0 0-6.394l-1.06 1.061a3.021 3.021 0 0 1 0 4.273l1.06 1.06Zm-9.06 5.334a2.636 2.636 0 0 0 3.727 0l-1.06-1.061a1.136 1.136 0 0 1-1.607 0l-1.06 1.06Zm0-3.728a2.636 2.636 0 0 0 0 3.728l1.06-1.061a1.136 1.136 0 0 1 0-1.606l-1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAttachment);
export default ForwardRef;
