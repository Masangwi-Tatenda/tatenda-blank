import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/common/SectionTitle';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, DollarSign, FileText, Gift, Mail, Phone, Heart, UserCircle, Repeat, Calendar, HelpCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  amount: z.string().min(1, "Please select or enter an amount."),
  customAmount: z.string().optional(),
  frequency: z.enum(["one-time", "weekly", "monthly"], {
    required_error: "Please select a donation frequency.",
  }),
  purpose: z.string({
    required_error: "Please select a donation purpose.",
  }),
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  address: z.string().optional(),
  paymentMethod: z.enum(["credit-card", "bank-transfer", "paypal"], {
    required_error: "Please select a payment method.",
  }),
  comments: z.string().optional(),
  anonymous: z.boolean().default(false),
});

const predefinedAmounts = ["10", "25", "50", "100", "200", "500"];

const DonateCard = ({ icon: Icon, title, description, className }) => (
  <Card className={className}>
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-full bg-church-burgundy/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-church-burgundy" />
      </div>
      <h3 className="text-lg font-bold text-church-burgundy mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("online");
  const [selectedAmount, setSelectedAmount] = useState("25");
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "25",
      customAmount: "",
      frequency: "one-time",
      purpose: "general",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "credit-card",
      comments: "",
      anonymous: false,
    },
  });

  const watchAmount = form.watch("amount");
  
  useEffect(() => {
    if (watchAmount === "custom") {
      setIsCustomAmount(true);
    } else {
      setIsCustomAmount(false);
      setSelectedAmount(watchAmount);
    }
  }, [watchAmount]);

  const onSubmit = (data) => {
    console.log("Donation data:", data);
    toast({
      title: "Thank you for your donation!",
      description: "Your generosity helps support our parish community.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow page-transition">
        <section className="relative">
          <div 
            className="h-64 md:h-80 bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          >
            <div className="absolute inset-0 bg-church-navy/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Support Our Parish</h1>
                <p className="text-xl text-white/80">Your generosity fuels our mission and ministry</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <SectionTitle 
              title="Make a Donation" 
              subtitle="Choose how you would like to support our parish community."
            />
            
            <Tabs defaultValue="online" className="mt-12" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="online">Online Donation</TabsTrigger>
                <TabsTrigger value="other">Other Methods</TabsTrigger>
                <TabsTrigger value="projects">Our Projects</TabsTrigger>
              </TabsList>
              
              <TabsContent value="online" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card className="shadow-md">
                      <CardHeader>
                        <CardTitle className="text-2xl text-church-burgundy">Online Donation Form</CardTitle>
                        <CardDescription>Please complete the form below to make your donation.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-church-burgundy flex items-center">
                                <DollarSign className="mr-2 h-5 w-5" />
                                Donation Amount
                              </h3>
                              
                              <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Choose an Amount (USD)</FormLabel>
                                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                      {predefinedAmounts.map((amount) => (
                                        <Button
                                          key={amount}
                                          type="button"
                                          variant={field.value === amount ? "default" : "outline"}
                                          className={
                                            field.value === amount 
                                              ? "bg-church-burgundy hover:bg-church-burgundy/90" 
                                              : "border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                                          }
                                          onClick={() => {
                                            field.onChange(amount);
                                          }}
                                        >
                                          ${amount}
                                        </Button>
                                      ))}
                                      <Button
                                        type="button"
                                        variant={field.value === "custom" ? "default" : "outline"}
                                        className={
                                          field.value === "custom" 
                                            ? "bg-church-burgundy hover:bg-church-burgundy/90" 
                                            : "border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10"
                                        }
                                        onClick={() => {
                                          field.onChange("custom");
                                        }}
                                      >
                                        Custom
                                      </Button>
                                    </div>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              {isCustomAmount && (
                                <FormField
                                  control={form.control}
                                  name="customAmount"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Enter Custom Amount (USD)</FormLabel>
                                      <FormControl>
                                        <div className="relative">
                                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                          <Input className="pl-8" placeholder="0.00" {...field} />
                                        </div>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              )}
                              
                              <FormField
                                control={form.control}
                                name="frequency"
                                render={({ field }) => (
                                  <FormItem className="space-y-2">
                                    <FormLabel>Donation Frequency</FormLabel>
                                    <FormControl>
                                      <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-wrap gap-4"
                                      >
                                        <FormItem className="flex items-center space-x-2 space-y-0">
                                          <FormControl>
                                            <RadioGroupItem value="one-time" />
                                          </FormControl>
                                          <FormLabel className="font-normal cursor-pointer">One-time</FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-2 space-y-0">
                                          <FormControl>
                                            <RadioGroupItem value="weekly" />
                                          </FormControl>
                                          <FormLabel className="font-normal cursor-pointer">Weekly</FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-2 space-y-0">
                                          <FormControl>
                                            <RadioGroupItem value="monthly" />
                                          </FormControl>
                                          <FormLabel className="font-normal cursor-pointer">Monthly</FormLabel>
                                        </FormItem>
                                      </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="purpose"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Donation Purpose</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select purpose" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="general">General Parish Support</SelectItem>
                                        <SelectItem value="maintenance">Building Maintenance</SelectItem>
                                        <SelectItem value="outreach">Community Outreach</SelectItem>
                                        <SelectItem value="education">Religious Education</SelectItem>
                                        <SelectItem value="youth">Youth Ministry</SelectItem>
                                        <SelectItem value="liturgy">Liturgical Supplies</SelectItem>
                                        <SelectItem value="music">Music Ministry</SelectItem>
                                        <SelectItem value="other">Other (specify in comments)</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormDescription>
                                      Select where you would like your donation to be directed.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <Separator />
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-church-burgundy flex items-center">
                                <UserCircle className="mr-2 h-5 w-5" />
                                Your Information
                              </h3>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                  control={form.control}
                                  name="firstName"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>First Name</FormLabel>
                                      <FormControl>
                                        <Input {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                
                                <FormField
                                  control={form.control}
                                  name="lastName"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Last Name</FormLabel>
                                      <FormControl>
                                        <Input {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                      <Input type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Phone Number (Optional)</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Address (Optional)</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                      For tax receipts and acknowledgments.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <Separator />
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-church-burgundy flex items-center">
                                <CreditCard className="mr-2 h-5 w-5" />
                                Payment Method
                              </h3>
                              
                              <FormField
                                control={form.control}
                                name="paymentMethod"
                                render={({ field }) => (
                                  <FormItem className="space-y-2">
                                    <FormControl>
                                      <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                      >
                                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                                          <FormControl>
                                            <RadioGroupItem value="credit-card" />
                                          </FormControl>
                                          <FormLabel className="font-normal cursor-pointer flex-1">
                                            Credit Card
                                          </FormLabel>
                                          <div className="flex gap-1">
                                            {/* Credit card icons would go here */}
                                          </div>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                                          <FormControl>
                                            <RadioGroupItem value="bank-transfer" />
                                          </FormControl>
                                          <FormLabel className="font-normal cursor-pointer flex-1">
                                            Bank Transfer
                                          </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                                          <FormControl>
                                            <RadioGroupItem value="paypal" />
                                          </FormControl>
                                          <FormLabel className="font-normal cursor-pointer flex-1">
                                            PayPal
                                          </FormLabel>
                                        </FormItem>
                                      </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <Separator />
                            
                            <div>
                              <FormField
                                control={form.control}
                                name="comments"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Additional Comments (Optional)</FormLabel>
                                    <FormControl>
                                      <Textarea
                                        placeholder="Any special instructions or requests..."
                                        className="resize-y"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      Please include any special instructions or information relevant to your donation.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <div className="pt-4">
                              <Button
                                type="submit"
                                className="w-full bg-church-burgundy hover:bg-church-burgundy/90"
                                size="lg"
                              >
                                Complete Donation
                              </Button>
                              <p className="text-xs text-center text-gray-500 mt-3">
                                Your donation is secure and encrypted. By donating, you agree to our terms and privacy policy.
                              </p>
                            </div>
                          </form>
                        </Form>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="space-y-6">
                      <Card className="shadow-md">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl text-church-burgundy">Donation Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Amount:</span>
                              <span className="font-semibold">
                                ${isCustomAmount ? form.watch("customAmount") || "0.00" : selectedAmount}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Frequency:</span>
                              <span className="font-semibold capitalize">
                                {form.watch("frequency").replace("-", " ")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Purpose:</span>
                              <span className="font-semibold capitalize">
                                {form.watch("purpose").replace("-", " ")}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex justify-between text-lg font-bold text-church-burgundy">
                              <span>Total:</span>
                              <span>
                                ${isCustomAmount ? form.watch("customAmount") || "0.00" : selectedAmount}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="shadow-md">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl text-church-burgundy">How Your Donation Helps</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                              <Heart className="h-5 w-5 text-church-gold shrink-0 mr-2 mt-0.5" />
                              <span>Supports parish operations and maintenance</span>
                            </li>
                            <li className="flex items-start">
                              <Heart className="h-5 w-5 text-church-gold shrink-0 mr-2 mt-0.5" />
                              <span>Funds community outreach and charitable initiatives</span>
                            </li>
                            <li className="flex items-start">
                              <Heart className="h-5 w-5 text-church-gold shrink-0 mr-2 mt-0.5" />
                              <span>Enables religious education and youth programs</span>
                            </li>
                            <li className="flex items-start">
                              <Heart className="h-5 w-5 text-church-gold shrink-0 mr-2 mt-0.5" />
                              <span>Enhances worship through liturgical supplies and music</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="shadow-md bg-church-gold/10">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl text-church-burgundy flex items-center">
                            <HelpCircle className="mr-2 h-5 w-5" />
                            Need Assistance?
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <p className="text-gray-700 mb-4">
                            If you have any questions or need help with your donation, please contact our parish office.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 text-church-gold mr-2" />
                              <span>+123 456 7890</span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 text-church-gold mr-2" />
                              <span>donations@mushwebetania.org</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="other" className="mt-0">
                <div className="max-w-3xl mx-auto">
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl text-church-burgundy">Alternative Ways to Donate</CardTitle>
                      <CardDescription>
                        In addition to online donations, we offer several other convenient ways to support our parish.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-bold text-church-burgundy flex items-center mb-4">
                            <Gift className="mr-2 h-5 w-5" />
                            In-Person Donations
                          </h3>
                          <p className="text-gray-700 mb-4">
                            You can make a donation during Mass collections or by visiting the parish office during regular business hours.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <h4 className="font-semibold mb-2">Parish Office Hours:</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                              <li>Saturday: 10:00 AM - 2:00 PM</li>
                              <li>Sunday: Closed (donations accepted during Mass)</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-church-burgundy flex items-center mb-4">
                            <Mail className="mr-2 h-5 w-5" />
                            Mail-in Donations
                          </h3>
                          <p className="text-gray-700 mb-4">
                            You can mail a check or money order to our parish office. Please make checks payable to "Musha WeBetania Parish."
                          </p>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <h4 className="font-semibold mb-2">Mailing Address:</h4>
                            <p className="text-gray-700">
                              Musha WeBetania Parish<br />
                              Tangwena Road<br />
                              Opposite Jongwe Tarven<br />
                              Chikonohono
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-church-burgundy flex items-center mb-4">
                            <FileText className="mr-2 h-5 w-5" />
                            Bank Transfer
                          </h3>
                          <p className="text-gray-700 mb-4">
                            You can make a direct bank transfer to our parish account. Please include your name and purpose in the memo field.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <h4 className="font-semibold mb-2">Bank Details:</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li><span className="font-medium">Bank Name:</span> Example Bank</li>
                              <li><span className="font-medium">Account Name:</span> Musha WeBetania Parish</li>
                              <li><span className="font-medium">Account Number:</span> 1234567890</li>
                              <li><span className="font-medium">Branch Code:</span> 001-234</li>
                              <li><span className="font-medium">Swift Code:</span> EXAMPLEWEB</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-church-burgundy flex items-center mb-4">
                            <Calendar className="mr-2 h-5 w-5" />
                            Planned Giving
                          </h3>
                          <p className="text-gray-700 mb-4">
                            Consider including our parish in your will or estate planning. This type of donation can have a lasting impact on our community.
                          </p>
                          <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                            Learn About Planned Giving
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="projects" className="mt-0">
                <div className="max-w-4xl mx-auto">
                  <Card className="shadow-md mb-8">
                    <CardHeader>
                      <CardTitle className="text-2xl text-church-burgundy">Current Parish Projects</CardTitle>
                      <CardDescription>
                        These are our ongoing projects that need your support. Your targeted donations can help make these initiatives a reality.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <div className="space-y-6">
                        <div className="border rounded-lg overflow-hidden">
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="h-48 md:h-auto bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")' }}></div>
                            <div className="md:col-span-2 p-6">
                              <h3 className="text-xl font-bold text-church-burgundy mb-2">Sanctuary Renovation</h3>
                              <p className="text-gray-700 mb-4">
                                Our sanctuary needs repairs and updates to continue serving our community. This project includes restoring pews, updating lighting, and improving the sound system.
                              </p>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Progress: 42%</span>
                                <span className="text-sm font-medium">Goal: $50,000</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                                <div className="bg-church-burgundy h-2.5 rounded-full" style={{ width: '42%' }}></div>
                              </div>
                              <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                                Support This Project
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="h-48 md:h-auto bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")' }}></div>
                            <div className="md:col-span-2 p-6">
                              <h3 className="text-xl font-bold text-church-burgundy mb-2">Youth Center Expansion</h3>
                              <p className="text-gray-700 mb-4">
                                We're expanding our youth center to better serve the growing number of young people in our parish. The expansion will include additional meeting spaces, a recreation area, and updated technology.
                              </p>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Progress: 68%</span>
                                <span className="text-sm font-medium">Goal: $30,000</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                                <div className="bg-church-burgundy h-2.5 rounded-full" style={{ width: '68%' }}></div>
                              </div>
                              <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                                Support This Project
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="h-48 md:h-auto bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")' }}></div>
                            <div className="md:col-span-2 p-6">
                              <h3 className="text-xl font-bold text-church-burgundy mb-2">Community Outreach Program</h3>
                              <p className="text-gray-700 mb-4">
                                Our outreach program provides food, clothing, and support to those in need in our community. Your donations help us purchase supplies and expand our services to reach more people.
                              </p>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Progress: 25%</span>
                                <span className="text-sm font-medium">Goal: $20,000</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                                <div className="bg-church-burgundy h-2.5 rounded-full" style={{ width: '25%' }}></div>
                              </div>
                              <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
                                Support This Project
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DonateCard
                      icon={Heart}
                      title="Sustain Our Parish"
                      description="Your donations help maintain our facilities, support our staff, and fund our daily operations."
                      className="hover:shadow-md transition-shadow duration-300"
                    />
                    <DonateCard
                      icon={Repeat}
                      title="Recurring Impact"
                      description="Monthly donations provide steady, reliable support that allows us to plan for the future."
                      className="hover:shadow-md transition-shadow duration-300"
                    />
                    <DonateCard
                      icon={Users}
                      title="Build Community"
                      description="Your generosity helps us create programs and events that bring our parish family together."
                      className="hover:shadow-md transition-shadow duration-300"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
