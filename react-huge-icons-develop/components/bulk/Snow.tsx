import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSnow = (
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
            d='M12.678 5.25v13.5h-1.5V5.25h1.5Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m6.458 7.975 11.69 6.75-.75 1.3-11.69-6.75.75-1.3Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m18.149 9.275-11.691 6.75-.75-1.3 11.69-6.75.75 1.3Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.398 3.47a.75.75 0 0 1 1.06 0l.586.585a1.25 1.25 0 0 0 1.768 0l.586-.585a.75.75 0 0 1 1.06 1.06l-.585.586a2.75 2.75 0 0 1-3.89 0l-.585-.586a.75.75 0 0 1 0-1.06Zm0 17.06a.75.75 0 0 0 1.06 0l.586-.585a1.25 1.25 0 0 1 1.768 0l.586.585a.75.75 0 0 0 1.06-1.06l-.585-.586a2.75 2.75 0 0 0-3.89 0l-.585.586a.75.75 0 0 0 0 1.06ZM3.276 9.926a.75.75 0 0 1 .53-.919l.8-.214a1.25 1.25 0 0 0 .884-1.531l-.214-.8a.75.75 0 1 1 1.449-.388l.214.8a2.75 2.75 0 0 1-1.945 3.368l-.8.214a.75.75 0 0 1-.918-.53Zm14.774 8.53a.75.75 0 0 0 .531-.918l-.214-.8a1.25 1.25 0 0 1 .883-1.531l.8-.215a.75.75 0 0 0-.387-1.449l-.8.215a2.75 2.75 0 0 0-1.945 3.368l.214.8a.75.75 0 0 0 .919.53Zm0-12.912a.75.75 0 0 1 .531.918l-.214.8a1.25 1.25 0 0 0 .883 1.531l.8.215a.75.75 0 0 1-.387 1.449l-.8-.215a2.75 2.75 0 0 1-1.945-3.368l.214-.8a.75.75 0 0 1 .919-.53Zm-14.774 8.53a.75.75 0 0 0 .53.919l.8.214a1.25 1.25 0 0 1 .884 1.531l-.214.8a.75.75 0 1 0 1.449.388l.214-.8a2.75 2.75 0 0 0-1.945-3.368l-.8-.214a.75.75 0 0 0-.918.53Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSnow);
export default ForwardRef;
