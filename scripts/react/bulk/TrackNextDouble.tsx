import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackNextDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.68 6.507a2.539 2.539 0 0 0-.789.322 2.004 2.004 0 0 0-.848 1.268C11.014 8.257 11 9.54 11 12s.014 3.743.043 3.903c.185 1.012 1.24 1.755 2.247 1.584.16-.027.398-.1.53-.162.204-.095 6.002-3.461 6.309-3.662l.107-.069.012 1.553c.013 1.724.006 1.677.289 1.925.34.299.874.186 1.123-.236.079-.134.08-.208.08-4.796 0-2.563-.014-4.709-.031-4.769-.042-.152-.262-.392-.417-.457a.742.742 0 0 0-.786.139c-.25.236-.245.201-.258 1.9l-.012 1.553-.107-.069c-.304-.2-6.104-3.566-6.309-3.663a1.989 1.989 0 0 0-1.14-.167'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackNextDouble);
export default ForwardRef;
