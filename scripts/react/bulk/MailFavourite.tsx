import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMailFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.23 2.043c-.998.235-1.518 1.376-1.066 2.337.046.097.557.769 1.135 1.493C18.49 7.363 18.509 7.38 19 7.38c.491 0 .51-.017 1.701-1.507.578-.724 1.089-1.396 1.135-1.493.57-1.214-.398-2.567-1.681-2.347-.359.061-.609.19-.912.471l-.245.226-.209-.198c-.469-.443-1.02-.616-1.559-.489M5.698 11.315a.779.779 0 0 0-.416.476c-.062.222-.052.333.048.531.077.153.268.312 1.35 1.129 1.803 1.361 2.155 1.522 3.32 1.522s1.517-.161 3.32-1.522c1.082-.817 1.273-.976 1.35-1.129.1-.198.11-.309.048-.531-.114-.41-.593-.655-.973-.496-.073.031-.679.466-1.349.967-1.489 1.116-1.688 1.217-2.396 1.217s-.907-.101-2.396-1.217c-.67-.501-1.276-.936-1.349-.967a.672.672 0 0 0-.557.02'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailFavourite);
export default ForwardRef;
