import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEditRectangle = (
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
            d='M2.75 6A3.25 3.25 0 0 1 6 2.75h6a.75.75 0 0 0 0-1.5H6A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h12A4.75 4.75 0 0 0 22.75 18v-6a.75.75 0 0 0-1.5 0v6A3.25 3.25 0 0 1 18 21.25H6A3.25 3.25 0 0 1 2.75 18V6Zm13.669-3.323a2.312 2.312 0 0 1 3.27 0l1.634 1.635a2.312 2.312 0 0 1 0 3.269l-1.45 1.45a16.081 16.081 0 0 1-.357-.183c-.835-.44-1.827-1.057-2.567-1.797-.74-.74-1.357-1.732-1.797-2.567a16.251 16.251 0 0 1-.182-.358l1.449-1.449Zm-.53 5.434c.875.876 1.989 1.565 2.87 2.033l-5.699 5.7a2.312 2.312 0 0 1-1.308.654l-3.432.49a1.156 1.156 0 0 1-1.308-1.308l.49-3.432c.071-.495.3-.954.654-1.308l5.7-5.7c.468.882 1.157 1.996 2.033 2.871Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEditRectangle);
export default ForwardRef;
