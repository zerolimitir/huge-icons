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
            d='M12.767 14v-.75.75Zm-1.534 0v.75V14ZM7.983 2v-.75V2Zm8.034 0v.75V2Zm2.233 3.563-.685.305.685-.305Zm-1.32-2.97-.685.305.686-.304Zm-9.86 0 .685.305-.686-.304Zm-1.32 2.97-.686-.304.686.304Zm7.017 7.687h-1.534v1.5h1.534v-1.5ZM7.983 2.75h8.034v-1.5H7.983v1.5Zm10.953 2.509-1.32-2.97-1.37.61 1.319 2.969 1.37-.61ZM6.384 2.289l-1.32 2.97 1.371.609 1.32-2.97-1.371-.609Zm9.633.461a.25.25 0 0 1 .228.148l1.371-.609a1.75 1.75 0 0 0-1.6-1.039v1.5Zm-8.034-1.5a1.75 1.75 0 0 0-1.599 1.04l1.37.608a.25.25 0 0 1 .23-.148v-1.5Zm3.25 12c-3.8 0-6.34-3.91-4.798-7.382l-1.37-.61C3.08 9.723 6.347 14.75 11.232 14.75v-1.5Zm1.534 1.5c4.885 0 8.152-5.028 6.169-9.491l-1.371.609c1.543 3.472-.998 7.382-4.798 7.382v1.5Z'
        />
        <path
            fill='currentColor'
            d='M12.75 14a.75.75 0 0 0-1.5 0h1.5ZM15 22.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3.75.75v-8h-1.5v8h1.5Zm-.75.75h3v-1.5h-3v1.5Zm0-1.5H9v1.5h3v-1.5Zm1.17-15.915a.75.75 0 1 0-1.34-.67l1.34.67ZM11 8l-.67-.335A.75.75 0 0 0 11 8.75V8Zm2 0 .67.335A.75.75 0 0 0 13 7.25V8Zm-2.17 2.665a.75.75 0 1 0 1.34.67l-1.34-.67Zm1-6-1.5 3 1.34.67 1.5-3-1.34-.67ZM11 8.75h2v-1.5h-2v1.5Zm1.33-1.085-1.5 3 1.34.67 1.5-3-1.34-.67Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlassBroken);
export default ForwardRef;
