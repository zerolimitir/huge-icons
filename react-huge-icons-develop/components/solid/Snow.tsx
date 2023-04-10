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
            d='M9.398 3.47a.75.75 0 0 1 1.06 0l.586.585a1.25 1.25 0 0 0 1.768 0l.586-.585a.75.75 0 1 1 1.06 1.06l-.585.586a2.737 2.737 0 0 1-1.195.702V10.7l4.23-2.442a2.738 2.738 0 0 1 .01-1.385l.214-.8a.75.75 0 1 1 1.449.388l-.214.8a1.25 1.25 0 0 0 .883 1.531l.8.215a.75.75 0 0 1-.387 1.449l-.8-.215a2.737 2.737 0 0 1-1.206-.684L13.43 12l4.228 2.441a2.737 2.737 0 0 1 1.205-.683l.8-.214a.75.75 0 0 1 .389 1.448l-.8.215a1.25 1.25 0 0 0-.884 1.53l.214.801a.75.75 0 1 1-1.449.388l-.214-.8a2.738 2.738 0 0 1-.01-1.386l-4.23-2.441v4.883c.438.124.85.358 1.195.702l.586.586a.75.75 0 1 1-1.06 1.06l-.587-.585a1.25 1.25 0 0 0-1.768 0l-.585.585a.75.75 0 1 1-1.06-1.06l.585-.586a2.737 2.737 0 0 1 1.194-.702V13.3L6.95 15.741c.111.44.115.915-.011 1.385l-.214.8a.75.75 0 1 1-1.45-.388l.215-.8a1.25 1.25 0 0 0-.884-1.531l-.8-.215a.75.75 0 0 1 .388-1.449l.8.215c.47.126.88.367 1.206.684L10.429 12l-4.23-2.442a2.737 2.737 0 0 1-1.204.684l-.8.214a.75.75 0 1 1-.389-1.448l.8-.215a1.25 1.25 0 0 0 .884-1.53l-.214-.8a.75.75 0 1 1 1.449-.39l.214.801c.126.47.122.945.01 1.385l4.23 2.442V5.818a2.738 2.738 0 0 1-1.195-.702l-.586-.586a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSnow);
export default ForwardRef;
