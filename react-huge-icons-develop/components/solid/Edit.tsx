import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEdit = (
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
            d='M15.419 3.677a2.312 2.312 0 0 1 3.27 0l1.634 1.635a2.312 2.312 0 0 1 0 3.269l-1.45 1.45a16.17 16.17 0 0 1-.357-.183c-.835-.44-1.827-1.057-2.567-1.797-.74-.74-1.357-1.732-1.797-2.567a16.251 16.251 0 0 1-.182-.358l1.449-1.449Zm-.53 5.434c.875.876 1.989 1.565 2.87 2.033l-5.699 5.7a2.312 2.312 0 0 1-1.308.654l-3.432.49a1.156 1.156 0 0 1-1.308-1.308l.49-3.432c.071-.495.3-.954.654-1.308l5.7-5.7c.468.882 1.157 1.996 2.033 2.871ZM3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
