# Scroll Animation System

This project includes a smooth, performant scroll-based animation system that triggers animations as elements enter the viewport.

## Features

- ✨ **Smooth & Natural**: Animations use optimized easing curves for fluid motion
- 🚀 **Performance Optimized**: Uses Intersection Observer API and GPU acceleration
- 📱 **Mobile Friendly**: Lightweight and works smoothly on all devices
- 🎯 **No Layout Shifts**: Animations don't cause content jumping
- 🔄 **Configurable**: Multiple animation types with customizable timing

## Animation Types

The system supports the following animation types:

1. **fade** - Simple opacity fade-in
2. **fadeSlideUp** - Fade in while sliding up (default, subtle)
3. **slideUp** - Slide up with fade (more pronounced)
4. **slideDown** - Slide down with fade
5. **slideLeft** - Slide from right to left with fade
6. **slideRight** - Slide from left to right with fade
7. **scale** - Scale up from 95% to 100% with fade

## Usage

### Basic Usage

```tsx
import { AnimatedSection } from '../components/AnimatedSection';

function MyComponent() {
  return (
    <AnimatedSection>
      <YourContent />
    </AnimatedSection>
  );
}
```

### With Custom Animation Type

```tsx
<AnimatedSection animation="slideUp">
  <YourContent />
</AnimatedSection>
```

### With Custom Timing

```tsx
<AnimatedSection 
  animation="scale"
  duration={1000}
  delay={200}
>
  <YourContent />
</AnimatedSection>
```

### Full Configuration

```tsx
<AnimatedSection 
  animation="fadeSlideUp"
  duration={800}           // Animation duration in ms
  delay={0}               // Delay before animation starts in ms
  threshold={0.1}         // How much of element must be visible (0-1)
  triggerOnce={true}      // Whether to animate only once or every time
  className="custom-class" // Additional CSS classes
>
  <YourContent />
</AnimatedSection>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | `AnimationType` | `'fadeSlideUp'` | Type of animation to use |
| `duration` | `number` | `700` | Animation duration in milliseconds |
| `delay` | `number` | `0` | Delay before animation starts (ms) |
| `threshold` | `number` | `0.1` | Intersection threshold (0-1) |
| `triggerOnce` | `boolean` | `true` | Animate only once or on every scroll |
| `className` | `string` | `''` | Additional CSS classes |

## Performance Optimization

The animation system includes several performance optimizations:

1. **Intersection Observer**: Only animates when elements are visible
2. **GPU Acceleration**: Uses `will-change` and `transform` properties
3. **Smooth Easing**: Custom cubic-bezier timing function
4. **Efficient Re-renders**: Minimal React re-renders using refs

## Best Practices

1. **Use `triggerOnce={true}`** for most cases to avoid repeated animations
2. **Keep durations between 500-1000ms** for natural feel
3. **Stagger animations** using the `delay` prop for sequential reveals
4. **Use subtle animations** like `fadeSlideUp` for better UX
5. **Test on mobile devices** to ensure smooth performance

## Examples from Home Page

```tsx
// Hero section - Simple fade
<AnimatedSection animation="fade" duration={1000}>
  <Hero />
</AnimatedSection>

// Features strip - Fade slide with delay
<AnimatedSection animation="fadeSlideUp" delay={200} duration={800}>
  <HeroFeaturesStrip />
</AnimatedSection>

// Content sections - Consistent fade slide
<AnimatedSection animation="fadeSlideUp" duration={800}>
  <ClientLogos />
</AnimatedSection>

// CTA - Scale animation for emphasis
<AnimatedSection animation="scale" duration={800}>
  <CTA />
</AnimatedSection>
```

## Custom Hook Usage

You can also use the `useScrollAnimation` hook directly for more control:

```tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function MyComponent() {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div 
      ref={elementRef}
      className={isVisible ? 'opacity-100' : 'opacity-0'}
    >
      Custom animated content
    </div>
  );
}
```

## Browser Support

- ✅ Chrome/Edge (modern versions)
- ✅ Firefox (modern versions)
- ✅ Safari (modern versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

The Intersection Observer API is widely supported. For older browsers, animations will simply not trigger (graceful degradation).
