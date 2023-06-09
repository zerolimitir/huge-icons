import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPyramid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.612 2.284c-.601.056-1.076.215-1.622.543a4.166 4.166 0 0 0-1.1 1.037c-.175.26-7.067 12.134-7.239 12.473a3.816 3.816 0 0 0-.276 2.552c.365 1.419 1.455 2.456 2.922 2.78.303.067.773.071 7.703.071 6.93 0 7.4-.004 7.703-.071 1.516-.334 2.611-1.412 2.955-2.91.081-.349.092-1.075.023-1.426a4.258 4.258 0 0 0-.322-.973c-.169-.338-7.064-12.222-7.25-12.496-.328-.483-.872-.946-1.449-1.233-.569-.284-1.339-.414-2.048-.347m1.217 1.618c.341.135.738.415.944.666.123.151 2.147 3.593 2.147 3.652 0 .011-1.764.02-3.92.02-2.156 0-3.92-.009-3.92-.02 0-.059 2.024-3.501 2.147-3.651a2.67 2.67 0 0 1 .808-.612c.363-.162.564-.197 1.045-.183.393.011.502.03.749.128m5.273 8.062c.703 1.212 1.284 2.22 1.291 2.24.008.021-3.018.036-7.393.036-4.381 0-7.401-.015-7.393-.036.007-.02.588-1.028 1.291-2.24L7.175 9.76h9.649l1.278 2.204m2.505 4.326c.549.954.633 1.181.633 1.71a2.282 2.282 0 0 1-1.724 2.179c-.223.052-1.186.06-7.516.06s-7.293-.008-7.516-.06c-.777-.184-1.458-.856-1.663-1.641a2.491 2.491 0 0 1-.001-1.07c.071-.274.17-.478.573-1.178l.305-.53h16.604l.305.53'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPyramid);
export default ForwardRef;
