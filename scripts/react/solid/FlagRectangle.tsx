import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlagRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.68 1.595a1.837 1.837 0 0 0-.83.507c-.34.341-.518.714-.572 1.201-.025.226-.036 2.942-.029 7.377.01 6.518.016 7.029.079 7.144.298.545 1.014.551 1.332.012.078-.133.08-.218.091-4.246l.011-4.11h3.059c3.036 0 3.061-.001 3.241-.085.359-.169.618-.633.562-1.01-.013-.093-.288-.7-.634-1.4-.804-1.627-.804-1.343 0-2.97.346-.7.621-1.307.634-1.4.055-.373-.202-.84-.557-1.011-.17-.083-.21-.084-3.17-.082-2.76.002-3.014.008-3.217.073M7.42 16.027a4.102 4.102 0 0 0-2.294 1.07c-.218.205-1.438 1.666-1.579 1.89a1.825 1.825 0 0 0-.267.984c0 .944.603 1.734 1.502 1.968.206.054 1.077.061 7.218.061s7.012-.007 7.218-.061c.695-.181 1.237-.72 1.443-1.436.052-.18.064-.334.05-.631-.028-.586-.164-.83-1.041-1.871-.892-1.058-1.301-1.401-2.03-1.699-.6-.245-.793-.272-2.147-.291l-1.247-.019-.016.994c-.017 1.109-.036 1.211-.299 1.645-.434.716-1.119 1.109-1.931 1.109s-1.497-.393-1.931-1.109c-.263-.434-.282-.536-.299-1.641L9.754 16l-1.107.006c-.609.003-1.161.013-1.227.021'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlagRectangle);
export default ForwardRef;
