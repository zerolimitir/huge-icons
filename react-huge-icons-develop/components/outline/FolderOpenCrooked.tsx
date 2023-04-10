import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderOpenCrooked = (
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
            d='m21.688 13.158-.65-.375.65.375Zm-3.267 5.657-.65-.375.65.375ZM6.27 12.422l.69.295-.69-.295ZM2.393 19.58a.75.75 0 0 0 1.38.59l-1.38-.59ZM11.08 4.786l-.39.64.39-.64ZM8.91 3.464l.39-.64-.39.64ZM2.75 17.625V6.375h-1.5v11.25h1.5ZM12.723 6h3.353V4.5h-3.353V6ZM5.248 3.75h2.019v-1.5H5.248v1.5Zm13.327 4.875V9.75h1.5V8.625h-1.5ZM10.229 10.5h9.096V9h-9.096v1.5Zm9.096 0h.506V9h-.506v1.5Zm1.714 2.283L17.77 18.44l1.3.75 3.266-5.657-1.298-.75Zm-6.332 7.467H5.248v1.5h9.459v-1.5ZM5.58 12.127 2.393 19.58l1.38.59 3.187-7.453-1.379-.59Zm5.888-7.981L9.301 2.824l-.78 1.28 2.167 1.322.781-1.28ZM17.77 18.44c-.653 1.132-1.82 1.81-3.064 1.81v1.5c1.799 0 3.451-.98 4.363-2.56l-1.299-.75Zm2.06-7.94c1.057 0 1.81 1.24 1.208 2.283l1.298.75C23.467 11.576 22.141 9 19.831 9v1.5ZM10.23 9c-2.025 0-3.84 1.238-4.648 3.127l1.38.59c.582-1.36 1.869-2.217 3.268-2.217V9ZM7.267 3.75c.438 0 .871.122 1.253.354l.78-1.28a3.906 3.906 0 0 0-2.033-.574v1.5ZM16.077 6c1.352 0 2.498 1.148 2.498 2.625h1.5c0-2.25-1.764-4.125-3.999-4.125V6Zm-3.354-1.5c-.44 0-.872-.122-1.254-.354l-.78 1.28A3.906 3.906 0 0 0 12.722 6V4.5ZM2.75 6.375c0-1.477 1.145-2.625 2.498-2.625v-1.5c-2.235 0-3.998 1.874-3.998 4.125h1.5Zm-1.5 11.25c0 2.25 1.763 4.125 3.998 4.125v-1.5c-1.353 0-2.498-1.148-2.498-2.625h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderOpenCrooked);
export default ForwardRef;
