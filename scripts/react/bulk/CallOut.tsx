import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.811 2.277a.769.769 0 0 0-.551.608c-.063.335.19.739.521.83.098.028.585.045 1.279.045h1.12l-2.406 2.41c-1.324 1.325-2.435 2.468-2.47 2.538-.122.244-.065.603.131.826.183.209.553.282.836.165.104-.043.883-.795 2.559-2.47l2.41-2.409v1.12c0 .647.018 1.183.042 1.269.151.543.84.719 1.243.316.23-.23.243-.333.224-1.74-.013-1.03-.028-1.286-.086-1.485a2.808 2.808 0 0 0-1.461-1.762c-.498-.246-.645-.266-2.022-.281-.682-.007-1.298.002-1.369.02'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallOut);
export default ForwardRef;
