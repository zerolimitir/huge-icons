import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArchiveDocument = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.7 5.316a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074M3 15.117c0 2.018.015 3.227.043 3.428.247 1.773 1.679 3.192 3.443 3.413.455.057 10.573.057 11.028 0a4.008 4.008 0 0 0 3.444-3.444c.026-.204.042-1.521.042-3.423V12H3v3.117m11.3.199c.38.175.552.587.398.955a.734.734 0 0 1-.398.413c-.149.069-.305.074-2.291.075-1.835.001-2.152-.008-2.28-.061a.745.745 0 0 1-.029-1.382c.149-.069.304-.074 2.3-.074 1.996 0 2.151.005 2.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveDocument);
export default ForwardRef;
