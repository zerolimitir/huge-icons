import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusicRectangle = (
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
            d='m14.11 7.34.415-.625-.416.624Zm2 1.333-.417.624.416-.624ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm10.25 14.016c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 0 0 2.75-2.75h-1.5ZM15 16.516c-.69 0-1.25-.56-1.25-1.25h-1.5a2.75 2.75 0 0 0 2.75 2.75v-1.5Zm-1.25-1.25c0-.69.56-1.25 1.25-1.25v-1.5a2.75 2.75 0 0 0-2.75 2.75h1.5Zm1.25-1.25c.69 0 1.25.56 1.25 1.25h1.5a2.75 2.75 0 0 0-2.75-2.75v1.5Zm-4.75-1.75c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 0 0 2.75-2.75h-1.5ZM9 13.516c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 9 15.016v-1.5Zm-1.25-1.25c0-.69.56-1.25 1.25-1.25v-1.5a2.75 2.75 0 0 0-2.75 2.75h1.5ZM9 11.016c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 9 9.516v1.5Zm2.75 1.25V9.003h-1.5v3.263h1.5Zm1.943-4.303 2 1.334.832-1.248-2-1.334-.832 1.248Zm2.557 2.374v4.93h1.5v-4.93h-1.5Zm-.557-1.04c.348.231.557.622.557 1.04h1.5c0-.92-.46-1.778-1.225-2.288l-.832 1.248Zm-3.943-.294a1.25 1.25 0 0 1 1.943-1.04l.832-1.248c-1.827-1.218-4.275.092-4.275 2.288h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicRectangle);
export default ForwardRef;
